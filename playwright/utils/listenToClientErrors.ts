import { expect, type Page } from '@playwright/test'

export async function listenToClientErrors(params: { page: Page }) {
  const { page } = params

  const errors: Array<string> = []
  page.on('pageerror', (exception) => {
    errors.push(exception.message)
  })

  async function expectNoClientErrorsDidHappen() {
    await page.waitForTimeout(500)

    await expect(errors, `Client errors: ${errors.join('\n\n')}`).toHaveLength(0)
  }

  return { expectNoClientErrorsDidHappen }
}
