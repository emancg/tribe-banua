import { z } from 'zod';

/**
 * Form Validation Schemas
 *
 * Common validation schemas using Zod
 */

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').optional().or(z.literal('')),
  subject: z.string().min(3, 'Subject must be at least 3 characters').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

// Newsletter Signup Schema
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2).optional().or(z.literal('')),
});

// Booking Form Schema
export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  guests: z.number().min(1, 'At least 1 guest required').max(50),
  message: z.string().optional().or(z.literal('')),
});

// Generic email validation
export const emailSchema = z.string().email('Invalid email address');

// Generic phone validation
export const phoneSchema = z.string().min(10, 'Invalid phone number');

// Generic required string
export const requiredString = (fieldName = 'This field') =>
  z.string().min(1, `${fieldName} is required`);
