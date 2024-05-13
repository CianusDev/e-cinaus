/* eslint-disable react/no-unescaped-entities */
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SignInAuthForm } from '../(src)/features/SingInAuthForm'
import { SignUpAuthForm } from '../(src)/features/SingUpAuthForm'

const page = () => {
  return (
    <div className="container relative flex h-[800px] sm:flex-col items-center justify-center lg:px-0">
    <Link
      href="/login"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute right-2 top-2 md:right-4 md:top-4"
      )}
    >
      Se connecter
    </Link>

    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Inscrivez-vous
          </h1>
          <p className="text-sm text-muted-foreground">
            Entrer les informations necessaires ici pour creer votre compte
          </p>
        </div>
        <SignUpAuthForm />
        <p className="px-8 text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
  )
}

export default page