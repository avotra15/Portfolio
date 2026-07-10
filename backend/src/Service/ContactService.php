<?php
namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
class ContactService
{
    public function __construct(private readonly MailerInterface $mailer)   {}

    public function sendContactEmail(string $email, string $subject, string $message): void
    {
        $emailMessage = (new Email())
            ->from($email)
            ->to('avotraStani@gmail.com')
            ->subject($subject)
            ->text($message);

        $this->mailer->send($emailMessage);
    }
}
