'use client';

import React from 'react';
import { Resend } from 'resend';
import { Button } from '@/components/ui/button';

const resend = new Resend('re_ThiRe8Xe_71McV6KDikyhr9pKhgJKPUMf');

// This code snippet defines a function called `extractErrorMessage` that takes an `error` parameter and returns a string message. It checks the type of the `error` parameter and assigns the appropriate message based on the type. If the type is not recognized
const extractErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong.';
  }
  return message;
};

const sendEmail = async () => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ceschiatti@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });
  } catch (error) {
    let message = extractErrorMessage(error);
    console.log(message);
    return {
      message,
    };
  }
};

function Page() {
  return <Button onClick={sendEmail}>Send</Button>;
}

export default Page;
