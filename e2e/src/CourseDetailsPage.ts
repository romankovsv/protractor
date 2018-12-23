import { browser, element, by, $, $$ } from 'protractor';

export class CourseDetailsPage {

    private courseHeading = element(by.xpath("//div/h2"));

    public async verifyThatCourseDetailsPageIsOpenAndHasName(expectedName): Promise<CourseDetailsPage> {

        await expect(this.courseHeading.getText()).toContain(expectedName);
        return await Promise.resolve(this);
    }

}