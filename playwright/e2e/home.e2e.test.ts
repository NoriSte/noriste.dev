import { test } from '@playwright/test'
import { listenToClientErrors } from '../utils/listenToClientErrors'

test.describe('home', () => {
  test('Should render without errors', async ({ page }) => {
    const { expectNoClientErrorsDidHappen } = await listenToClientErrors({ page })

    await page.goto('/')

    await expectNoClientErrorsDidHappen()
  })
})
