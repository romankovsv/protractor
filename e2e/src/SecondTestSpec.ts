import { browser, element, by, $$ } from 'protractor';
import { ElementArrayFinder } from 'protractor/built/element';
import { HomePage } from './HomePage';
import { CourseDetailsPage } from './CourseDetailsPage';
import { CreateCoursePage } from './CreateCoursePage';

describe("Second suite", () => {

    const url = "https://movies-finder.firebaseapp.com/";
    var homePage;
    beforeAll(async () => {
        homePage = new HomePage();
        await homePage.openBrowser(url);
    });

    it("Create course test", async () => {

        await homePage.clickAddMovieButton();
        var createCoursePage = new CreateCoursePage();
        await createCoursePage.enterCourseName("hhkj");
        await createCoursePage.enterCourseDuration("2:22");
    });

});