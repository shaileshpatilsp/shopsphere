import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";
import { HeaderPage } from "./HeaderPage";
import { HeroPage } from "./HeroPage";


export class HomePage extends BasePage {
  readonly header: HeaderPage;
  readonly hero: HeroPage;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderPage(page);
    this.hero = new HeroPage(page);
  }

  async open() {
    await this.navigate("/");
  }
}