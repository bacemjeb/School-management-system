<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Yamilovs\Bundle\SmsBundle\Service\ProviderManager;
use Yamilovs\Bundle\SmsBundle\Sms\Sms;

class SmsController extends AbstractController
{
    /**
     * @Route("/sms", name="sms")
     */
    public function barAction(ProviderManager $providerManager)
    {
        $sms = new Sms('+21622453777', 'Bonjour, hello word');
        $provider = $providerManager->getProvider('message_bird_provider_doc');
        
        $provider->send($sms);

        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
