import { browser, element, by, $, $$ } from 'protractor';
import { CourseDetailsPage } from './CourseDetailsPage';
import { CreateCoursePage } from './CreateCoursePage';

export class HomePage {

    private heading = $(".well.hoverwell.thumbnail>h2");

    private headings = $$(".well.hoverwell.thumbnail>h2");

    private addMovie = element(by.css("a[href='/course/new']"));

    private dockerCourse = element(by.xpath("//h2[text()=' Docker on Windows ']"));

    public async openDockerCourse(): Promise<CourseDetailsPage> {
        await this.dockerCourse.click();
        return await Promise.resolve(new CourseDetailsPage());
    }

    public async openBrowser(url): Promise<HomePage> {
        await browser.get(url);
        return await Promise.resolve(this);
    }

    public async clickAddMovieButton(): Promise<CreateCoursePage> {
        await this.addMovie.click();
        /* return  new Promise<CreateCoursePage>((resolve) => {
            resolve(new CreateCoursePage());
        }); */
        return await Promise.resolve(new CreateCoursePage())
    }

    public async verifyNumberOfCourseOnPageAre(expectedNumber: number): Promise<HomePage> {
        await this.headings.then(function (items) {
            expect(items.length).toBe(expectedNumber, "Wrong Number");
        });
        return await Promise.resolve(this);
    }
}