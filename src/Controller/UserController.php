<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\UserFilterType;
use App\Form\ProfilePasswordType;
use App\Form\ProfileType;
use FOS\UserBundle\Model\UserManagerInterface;

/**
 * @Route("/manager/user")
 */
class UserController extends AbstractController
{
    private $manager;
    
    public function __construct(UserManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @Route("/", name="user_index", methods="GET|POST", options = { "expose" =  true})
     */
    public function index(): Response
    {
        $form = $this->createForm(UserFilterType::class);
        return $this->render('user/index.html.twig', [
            'form' => $form->createView(),
        ]);
        
    }
    
    /**
     * @Route("/listUser", name="list_user", methods="GET|POST", options = { "expose" =  true})
     */
    public function listData(Request $request, UserRepository $users) {
        $pagination = $request->get('pagination');
        $page = $pagination['page'] - 1;
        $limit = $pagination['perpage'];
        $entities = $users->search($page, $limit, $request->get('email'), $request->get('name'), $request->get('enable'));
        $count = $users->countUsers($request->get('email'), $request->get('name'), $request->get('enable'));
        $output = array(
            'data' => array(),
            'meta' => array(
                'page' => $pagination['page'],
                'perpage' => $limit,
                "pages" => ceil($count / $limit),
                "total" => $count,
            )
        );

        foreach ($entities as $entity) {
          
            if($entity->isEnabled() == true){
                $enable = 1;
            }else{
                $enable = 0;
            }
            $output['data'][] = [
                'id' => $entity->getId(),
                'name' => $entity->getUsername(),
                'enable' => $enable,
                'email' => $entity->getEmail(),
                'actions' => 'actions',
            ];
        }
        return new JsonResponse($output);
    }

    /**
     * @Route("/new", name="user_new", methods="GET|POST")
     */
    public function new(Request $request, UserRepository $users): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $existUsername = $users->findOneBy(array('username' => $form->getData()->getUsername()));
            if ($existUsername) {
                $this->get('session')->getFlashBag()->add('danger', "Identifiant que vous avez entré existe déjà!");
                return $this->redirect($this->generateUrl('user_new'));
            }
            
            $existEmail = $users->findOneBy(array('email' => $form->getData()->getEmail()));
            if ($existEmail) {
                $this->get('session')->getFlashBag()->add('danger', "Email que vous avez entré existe déjà!");
                return $this->redirect($this->generateUrl('user_new'));
            }
            
            if(array_key_exists('roles', $request->request->get('user'))){
            if ($request->request->get('user')['roles'] == 'ROLE_SUPER_ADMIN') {
                $user->addRole('ROLE_SUPER_ADMIN');
            } else if ($request->request->get('user')['roles'] == 'ROLE_ADMIN') {
                $user->addRole('ROLE_ADMIN');
            } else if ($request->request->get('user')['roles'] == 'ROLE_USER'){
                $user->addRole('ROLE_USER');
            }
            
            }else{
              $user->addRole('ROLE_USER');  
            }

            $user->setUsername($form->getData()->getUsername());
            $em->persist($user);
            $em->flush();
            if ($form->get('save')->isClicked()) {
                $this->get('session')->getFlashBag()->add('success', "Utilisateur ajouté avec succès");
                return $this->redirect($this->generateUrl('user_new'));
            } else {
                $this->get('session')->getFlashBag()->add('success', "Utilisateur ajouté avec succès");
                return $this->redirect($this->generateUrl('user_index'));
            }
        }

        return $this->render('user/new.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="user_edit", methods="GET|POST", options = { "expose" =  true})
     */
    public function edit(Request $request, UserRepository $users, User $user): Response
    {
        $form = $this->createForm(UserEditType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            

            
            if ($request->request->get('user')['roles'] == 'ROLE_SUPER_ADMIN') {
                $user->addRole('ROLE_SUPER_ADMIN');
            } else if ($request->request->get('user')['roles'] == 'ROLE_ADMIN') {
                $user->addRole('ROLE_ADMIN');
            } else if ($request->request->get('user')['roles'] == 'ROLE_USER'){
                $user->addRole('ROLE_USER');
            }
            
            $em->persist($user);
            $em->flush();
            
            if ($form->get('save')->isClicked()) {
                $this->get('session')->getFlashBag()->add('success', "Utilisateur modifié avec succès");
                return $this->redirect($this->generateUrl('user_edit', ['id' => $user->getId()]));
            } else {
                $this->get('session')->getFlashBag()->add('success', "Utilisateur modifié avec succès");
                return $this->redirect($this->generateUrl('user_index'));
            }

        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("delete/{id}", name="user_delete", methods="GET|POST" , options = { "expose" =  true})
     */
    public function delete(Request $request, User $user): Response
    {
   
        $em = $this->getDoctrine()->getManager();
        if (!$user){
          throw $this->createNotFoundException('Unable to find Text entity.');   
        }else{
        if($this->getUser()!= $user){
          $em->remove($user);
          $em->flush();

          $this->get('session')->getFlashBag()->add('success', "Utilisateur supprimé avec succès");
          return new JsonResponse(array("success" => true));
        }else{
          $this->get('session')->getFlashBag()->add('danger', "Impossible de supprimer un utilisateur connecté");
          return new JsonResponse(array("success" => false));            
        }
        }

    }
    
    /**
     * @Route("/profile", name="user_profile", methods="GET|POST")
     */
    public function profile(Request $request): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(ProfileType::class, $user);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
        
        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($user);
            $em->flush();
            $this->get('session')->getFlashBag()->add('success', "Modifications enregistrées avec succès");
            return $this->redirect($this->generateUrl('user_profile'));
            
        }
        
        $formPass = $this->createForm(ProfilePasswordType::class, $user);
        $formPass->handleRequest($request);

        if ($formPass->isSubmitted() && $formPass->isValid()) {
            $userManager = $this->manager;
           
            $userManager->updateUser($user);
            $this->get('session')->getFlashBag()->add('success', "Modifications enregistrées avec succès");
            return $this->redirect($this->generateUrl('user_profile'));
        }
        return $this->render('user/profile.html.twig', [
            'user' => $user,
            'formPass' => $formPass->createView(),
            'form' => $form->createView(),
            ]);
    }
    
    /**
     * @Route("/{id}/userRole", name="user_role", methods="GET|POST", options = { "expose" =  true})
     */
    public function userRole(Request $request, User $user) {
        $output['data'] = $user->getRoles()[0];
        return new JsonResponse($output);
    }
}
