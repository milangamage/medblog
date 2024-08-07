'use client';

import Button from '@/components/buttons/Button';
import { verifyEmailFormat } from '@/utils/EmailVerification';
import React, { useEffect, useRef, useState } from 'react';

export default function LeaveCommentForm({blogId}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submit, setSubmit] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: {
    target: { id: string; type: string; checked: boolean; value: string };
  }) => {
    const { id, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name ? 'Please enter your first name' : '',
      email: !formData.email
        ? 'Please enter your email address'
        : !verifyEmailFormat(formData.email)
          ? 'Please enter a valid email address'
          : '',
      message: !formData.message ? 'Please leave your comment here..' : '',
    };
    setFormErrors(newErrors);
    return newErrors;
  };

  useEffect(() => {
    if (click) {
      validateForm();
    }
  }, [click, formData]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClick(true);
    const errors = validateForm();
    if (Object.values(errors).some((error) => error)) {
      const firstError = Object.keys(errors).find(
        (key) => errors[key as keyof typeof errors]
      );
      if (firstError) {
        const ref = {
          name: nameRef,
          email: emailRef,
          message: messageRef,
        }[firstError];
        ref?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
      setIsSubmitting(false);
      return;
    }

  };

  return (
    <div className="w-auto xl:w-[980px] p-6 xl:p-16 bg-white dark:bg-opacity-20  rounded-lg shadow-xl">
      <h2 className="text-2xl font-normal mb-4 text-gray-800 dark:text-blue-400">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className='flex items-center justify-between gap-x-10 mb-10 mt-10'>
          <div className='min-w-[400px] relative'>
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={formData.name}
              ref={nameRef}
              onChange={handleChange}
              className={`form-container input-placeholder  ${formErrors.name ? 'outline-red-300' : 'outline-blue-30'}`}
              placeholder="Enter your name"
              required
            />
            {formErrors.name && (
              <div className="form-error-msg">{formErrors.name}</div>
            )}
          </div>
          <div className='min-w-[400px] relative'>
            <input
              type="email"
              id="email"
              autoComplete="off"
              value={formData.email}
              ref={emailRef}
              onChange={handleChange}
              className={`form-container input-placeholder ${formErrors.email ? 'outline-red-300' : 'outline-blue-30'}`}
              placeholder="Enter your email"
              required
            />
            {formErrors.email && (
              <div className="form-error-msg">{formErrors.email}</div>
            )}
          </div>
        </div>
        <div className=''>
          <div className='relative mb-10'>
            <textarea
              id="message"
              value={formData.message}
              autoComplete="off"
              ref={messageRef}
              onChange={handleChange}
              className={`form-text-area input-placeholder ${formErrors.message ? 'outline-red-300' : 'outline-blue-30'}`}
              rows={10}
              placeholder="Enter your message"
              required
            ></textarea>
            {formErrors.message && (
              <div className="form-error-msg">{formErrors.message}</div>
            )}
          </div>
        </div>
        <div className='w-[246px] mt-20'>
          <Button
            type="submit"
            title="Submit your comment"
            variant="find-jobs-btn-candidate"
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
