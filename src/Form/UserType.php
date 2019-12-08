<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\ImageType;


class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', TextType::class, array('required' => true))
            ->add('enabled', ChoiceType::class, array(
                    'choices' => array(
                        'Actif' => '1',
                        'Inactif' => '0'
                    ),
                ))
            ->add('roles', ChoiceType::class, array(
                    'choices' => array(
                        'Utilisateur' => 'ROLE_USER',
                        'Super Admin' => 'ROLE_SUPER_ADMIN',
                        'Admin' => 'ROLE_ADMIN',
                        
                    ),
                    'expanded' => true,
                    'multiple' => false,
                    'required' => true,
                    'mapped'=>false,
                    'data'=>'ROLE_USER',
                ))
           ->add('plainPassword', PasswordType::class, array(
                    'required' => true,
                ))
            ->add('username', TextType::class, array('required' => true))
            ->add('save', SubmitType::class)
            ->add('save_listing', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
