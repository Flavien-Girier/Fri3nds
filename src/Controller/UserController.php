<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{
    /**
     * @Route("/homepage", name="homepage")
     */
    public function index(Request $request)
    {

        $user = $this->getUser();

        return $this->render('/user/index.html.twig', [
            'user' => $user,
        ]);
    }
}
