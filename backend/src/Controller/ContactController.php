<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\DTO\ContactDTO;
use App\Form\ContactFormType;
use App\Service\ContactService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class ContactController extends AbstractController
{
    public function __construct(private readonly ContactService $contactService) {}
    
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request): JsonResponse
    {
        $dto = new ContactDTO();
        $form = $this->createForm(ContactFormType::class, $dto);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $this->contactService->sendContactEmail($dto->nom, $dto->email, $dto->message);
            return $this->json(['message' => 'Email sent successfully!']);
        } else {
            return $this->json(['message' => 'Invalid form submission.'], 400);
        }
    }
}
