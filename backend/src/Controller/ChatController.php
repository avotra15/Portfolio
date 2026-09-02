<?php

namespace App\Controller;

use App\Service\ChatService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class ChatController extends AbstractController
{
    public function __construct(
        private readonly ChatService $chatService,
    ) {
    }

    #[Route('/chat', name: 'app_chat', methods: ['POST'])]
    public function chat(
        Request $request
    ): JsonResponse
    {
        $data = $request->toArray();
        $userMessage = $data['message'] ?? '';

        if (empty($userMessage)) {
            return new JsonResponse(['error' => 'Message is required.'], 400);
        }

        $response = $this->chatService->chat($userMessage);

        return new JsonResponse(['response' => $response]);
    }
}
