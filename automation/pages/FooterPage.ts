import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FooterPage extends BasePage {
  readonly footer: Locator;
  readonly logo: Locator;
  readonly description: Locator;
  readonly quickLinks: Locator;
  readonly support: Locator;
  readonly social: Locator;
  readonly copyright: Locator;

  constructor(page: Page) {
    super(page);

    this.footer = page.getByTestId("footer");
    this.logo = page.getByTestId("footer-logo");
    this.description = page.getByTestId("footer-description");
    this.quickLinks = page.getByTestId("footer-quick-links");
    this.support = page.getByTestId("footer-support");
    this.social = page.getByTestId("footer-social");
    this.copyright = page.getByTestId("footer-copyright");
  }

  async verifyFooterLoaded() {
    await expect(this.footer).toBeVisible();
    await expect(this.logo).toBeVisible();
    await expect(this.description).toBeVisible();
    await expect(this.quickLinks).toBeVisible();
    await expect(this.support).toBeVisible();
    await expect(this.social).toBeVisible();
    await expect(this.copyright).toBeVisible();
  }

async verifyQuickLinks(){
    await expect(this.quickLinks).toBeVisible();
}

async verifySupportLinks(){
    await expect(this.support).toBeVisible();
}

async verifySocialLinks(){
     await expect(this.social).toBeVisible();
}
}