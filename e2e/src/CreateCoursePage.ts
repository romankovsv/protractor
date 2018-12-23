import { browser, element, by, $, $$ } from 'protractor';

export class CreateCoursePage {

    private courseNameField = element(by.id("name"));
    private courseDuration = element(by.id("duration"));

    public async enterCourseName(name: string): Promise<CreateCoursePage> {
        await this.courseNameField.sendKeys(name);
        return await Promise.resolve(this);
    }

    public async enterCourseDuration(duration: string):Promise<CreateCoursePage> {
         await this.courseDuration.sendKeys(duration);
        expect(true).toBe(true) 
        return await Promise.resolve(this);
    }

}