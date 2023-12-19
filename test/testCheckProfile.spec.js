import { test, expect } from '@playwright/test';

test('test profile page  ', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  await page.goto('https://todoservis.com/login')
  await page.getByPlaceholder('Correo Electrónico').click();
  await page.getByPlaceholder('Correo Electrónico').fill(`${process.env.USER}@gmail.com`);
  await page.getByPlaceholder('Contraseña').click();    
  await page.getByPlaceholder('Contraseña').fill('Asdfg12345!');
  await page.getByRole('button', { name: 'Acceso' }).click();
  await page.goto('https://todoservis.com/services')
  await page.goto('https://todoservis.com/provider/profile')
  await page.getByText('Nombre:german')
  await page.getByText('Apellido:zarko')
});


