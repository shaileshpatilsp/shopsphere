import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Footer", () => {
  test("should display the footer with all primary sections", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await homePage.footer.verifyFooterLoaded();
  });

  test("should display all quick navigation links", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await homePage.footer.verifyQuickLinks();
  });

  test("should display customer support and social links", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await homePage.footer.verifySupportLinks();
    await homePage.footer.verifySocialLinks();
  });
});