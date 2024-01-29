import { Component, DebugElement } from '@angular/core';
import { MyButtonDirective } from './my-button.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MyButtonDirective],
  template: `
    <button appMyButton>Click me!</button>
    <button appMyButton fontColor="red">Click me!</button>
    <button appMyButton bgColor="black">Click me!</button>
    <button appMyButton fontColor="black" bgColor="purple">Click me!</button>
  `,
})
class TestComponent {}

describe('MyButtonDirective', () => {
  let fixture : ComponentFixture<TestComponent>;

  let defaultButton: DebugElement;
  let customFontColorButton: DebugElement;
  let customBackgroundButton: DebugElement;
  let completelyCustomizedButton: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    [
      defaultButton,
      customFontColorButton,
      customBackgroundButton,
      completelyCustomizedButton
    ] = fixture.debugElement.queryAll(By.directive(MyButtonDirective))
  });

  describe('default button', () => {
    it("background's button should be blue", () => {
      expect(defaultButton.nativeElement.style.backgroundColor).toBe('blue');
    });

    it("font colors's button should be white", () => {
      expect(defaultButton.nativeElement.style.color).toBe('white');
    });
  });

  describe('custom font color button', () => {
    it("background's button should be blue", () => {
      expect(customFontColorButton.nativeElement.style.backgroundColor).toBe('blue');
    });

    it("font colors's button should be red", () => {
      expect(customFontColorButton.nativeElement.style.color).toBe('red');
    });
  });

  describe('custom background color button', () => {
    it("background's button should be black", () => {
      expect(customBackgroundButton.nativeElement.style.backgroundColor).toBe('black');
    });

    it("font colors's button should be white", () => {
      expect(customBackgroundButton.nativeElement.style.color).toBe('white');
    });
  });

  describe('button with background color and font color customized', () => {
    it("background's button should be purple", () => {
      expect(completelyCustomizedButton.nativeElement.style.backgroundColor).toBe('purple');
    });

    it("font colors's button should be black", () => {
      expect(completelyCustomizedButton.nativeElement.style.color).toBe('black');
    });
  });
});
