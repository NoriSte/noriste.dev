import { test, expect } from '@playwright/test'

test.use({ javaScriptEnabled: false })

test.describe('home', () => {
  test('Should render without errors', async ({ page }) => {
    await page.goto('/')

    const title = await page.getByRole('heading', {
      name: 'Home',
    })

    await expect(title).toBeVisible()
  })
})
