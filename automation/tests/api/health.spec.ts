import { test, expect } from '@playwright/test';
import { HeaderPage } from "../../pages/HeaderPage";
test('ShopSphere API should be running', async ({ request }) => {
  const response = await request.get('http://localhost:5000/');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toEqual({
    message: 'Welcome to ShopSphere API 🚀',
    status: 'Server is running',
  });
});