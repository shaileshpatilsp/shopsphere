import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";
import { HeaderPage } from "./HeaderPage";
import { HeroPage } from "./HeroPage";
import { SearchPage } from "./SearchPage";


export class HomePage extends BasePage {
  readonly header: HeaderPage;
  readonly hero: HeroPage;
  readonly search: SearchPage;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderPage(page);
    this.hero = new HeroPage(page);
        this.search = new SearchPage(page);

  }

  async open() {
    await this.navigate("/");
  }
}


