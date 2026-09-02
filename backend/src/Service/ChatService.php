<?php
namespace App\Service;

use Symfony\AI\Agent\AgentInterface;
use Symfony\AI\Platform\Message\Message;
use Symfony\AI\Platform\Message\MessageBag;

final readonly class ChatService
{
    public function __construct(
        private AgentInterface $agent,
    ) {
    }

    public function chat(string $userMessage): string
    {
        $messages = new MessageBag(
            Message::forSystem('Tu es un assistant utile.'),
            Message::ofUser($userMessage),
        );

        $result = $this->agent->call($messages);

        return $result->getContent();
    }
}


?>