import { test, expect } from '@playwright/test'

test.use({ javaScriptEnabled: false })

test.describe('visual-coverage-why-and-how-preply-measures-the-impact-of-the-design-system.e2e.test', () => {
  test('Should render without errors', async ({ page }) => {
    await page.goto(
      '/blog/visual-coverage-why-and-how-preply-measures-the-impact-of-the-design-system'
    )

    const title = await page.getByRole('heading', {
      name: 'Visual coverage: Why and How Preply Measures the Impact of the Design System (Part 1/2)',
    })

    await expect(title).toBeVisible()
  })
})
