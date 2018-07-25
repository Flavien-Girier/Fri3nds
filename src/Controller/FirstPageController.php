<?php
/**
 * Created by PhpStorm.
 * user: wilder
 * Date: 16/07/18
 * Time: 11:29
 */

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class FirstPageController
{
    /**
     * @param Environment $twig
     * @return Response
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     * @Route("/")
     */
    public function index(Environment $twig) {
        return new Response($twig->render('index.html.twig'));
    }
}