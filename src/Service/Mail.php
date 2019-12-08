<?php

namespace App\Service;

class Mail {

    public $container;

    public function __construct($container) {
        $this->container = $container;
    }


  

    public function sendConfirmationMail($user, $email, $password) {
        $body = $this->container->get('templating')->render('Mail/confirmation.html.twig', [
            'email' => $email,
            'password' => $password,
            'firstname' => $user->getFirstName(),
            'lastname' => $user->getLastName(),
            'user' => $user,
        ]);
        
        if($user->getLanguage()){
            
            if($user->getLanguage()->getCode() == "fr"){
               $message = (new \Swift_Message())
                ->setSubject('E-electricity – Confirmation de votre inscription')
                ->setFrom('contact@e-electricity.com')
                ->setTo($email);
            }else{
               $message = (new \Swift_Message())
                ->setSubject('E-electricity - Confirmation of your registration')
                ->setFrom('contact@e-electricity.com')
                ->setTo($email); 
            }
            
        }else{
             $message = (new \Swift_Message())
                ->setSubject('E-electricity - Confirmation of your registration')
                ->setFrom('contact@e-electricity.com')
                ->setTo($email);
        }

        $message->addPart($body, 'text/html');
        $this->container->get('mailer')->send($message);
    }
    
    public function sendDemandMail($user, $email, $content) {
        $body = $this->container->get('templating')->render('Mail/support.html.twig', [
            'content' => $content,
            'firstname' => $user->getFirstName(),
            'lastname' => $user->getLastName(),
            'user' => $user,
        ]);
            
    
        $message = (new \Swift_Message())
                ->setSubject('E-electricity Support')
                ->setFrom('contact@e-electricity.com')
                ->setTo($email);
        

        $message->addPart($body, 'text/html');
        $this->container->get('mailer')->send($message);
    }
    
    
    public function sendExpressMail($name, $email, $content, $language) {
        $body = $this->container->get('templating')->render('Mail/support_express.html.twig', [
            'content' => $content,
            'name' => $name,
            'language' => $language,
        ]);

        $message = (new \Swift_Message())
                ->setSubject('E-electricity Express Support')
                ->setFrom('contact@e-electricity.com')
                ->setTo($email);

        $message->addPart($body, 'text/html');
        $this->container->get('mailer')->send($message);
    }
    
    public function sendExpressMailToSuppliers($user, $tender) {
        $body = $this->container->get('templating')->render('Mail/express_supplier.html.twig', [
            'user' => $user,
            'tender' => $tender,
        ]);

        $message = (new \Swift_Message())
                ->setSubject('E-electricity Express Request')
                ->setFrom('contact@e-electricity.com')
                ->setTo($user->getEmail());

        $message->addPart($body, 'text/html');
        $this->container->get('mailer')->send($message);
    }
    
    
    public function sendExpressMailToUser($user, $tender, $suppliers) {
        $body = $this->container->get('templating')->render('Mail/demand_user.html.twig', [
            'user' => $user,
            'tender' => $tender,
            'suppliers' => $suppliers,
        ]);
        
        if($user->getLanguage()){
            
            if($user->getLanguage()->getCode() == "fr"){
               $message = (new \Swift_Message())
                ->setSubject("E-electricity – Suivi demande ")
                ->setFrom('contact@e-electricity.com')
                ->setTo($user->getEmail());
            }else{
               $message = (new \Swift_Message())
                ->setSubject("E-electricity - Follow-up request ")
                ->setFrom('contact@e-electricity.com')
                ->setTo($user->getEmail()); 
            }
            
        }else{
             $message = (new \Swift_Message())
                ->setSubject("E-electricity - Follow-up request ")
                ->setFrom('contact@e-electricity.com')
                ->setTo($user->getEmail());
        }

        

        $message->addPart($body, 'text/html');
        $this->container->get('mailer')->send($message);
    }



}
