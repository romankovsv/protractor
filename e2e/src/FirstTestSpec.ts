import { browser, element, by, $$ } from 'protractor';
import { ElementArrayFinder } from 'protractor/built/element';
import { HomePage } from './HomePage';
import { CourseDetailsPage } from './CourseDetailsPage';
import { CreateCoursePage } from './CreateCoursePage';

describe("First suite", () => {
    const url = "https://movies-finder.firebaseapp.com/";
    var homePage;
    beforeAll(async () => {
        homePage = new HomePage();
        await homePage.openBrowser(url);
    });

    fit("Search movie", async()=>{
        debugger;
        await homePage.enterValueToSearchField("Avengers: Infinity War");
        await homePage.clickButtonGo();
        await homePage.verifyThatRatingForFirstMovieIs("8.6")
    });

    xit("Verify number of availiable courses", async () => {
        await homePage.verifyNumberOfCourseOnPageAre(4);
    });

    xit("Verify Course Details Page", async () => {
        
        await homePage.openDockerCourse();
        var coursePage = new CourseDetailsPage;
        await coursePage.verifyThatCourseDetailsPageIsOpenAndHasName("Docker");
    });

    xit("Create course test", async () => {
        await homePage.clickAddMovieButton();
        var createCoursePage = new CreateCoursePage();
        await createCoursePage.enterCourseName("hhkj");
        await createCoursePage.enterCourseDuration("2:22");
    });

});