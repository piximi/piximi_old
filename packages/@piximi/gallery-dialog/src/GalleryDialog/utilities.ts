type MousePosition = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Position = {
  height: string;
  left: string;
  top: string;
  width: string;
};

const collisionWithRectangle = (a: Rectangle, b: Rectangle) => {
  // Check if two rectangles overlap
  return !!(
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
};

const reCalcWithoutPixelString = (mousePosition: MousePosition): Rectangle => {
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3;
  let top = y3;
  let width = x4 - x3;
  let height = y4 - y3;
  return { x: left, y: top, width: width, height: height };
};

const collisionDetection = (mousePosition: MousePosition): Array<string> => {
  // Check if any selectable item is overlapping with mouse selection box
  const rectangle1 = reCalcWithoutPixelString(mousePosition);
  const elements = document.getElementsByTagName('canvas'); // Check collisions with selectable elements
  let collisions: Array<string> = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rectangle2 = element.getBoundingClientRect();
    const imageId = element.getAttribute('imgid');
    const collisionDetected = collisionWithRectangle(rectangle1, rectangle2);
    if (imageId && collisionDetected) {
      collisions.push(imageId);
    }
  }
  return collisions;
};

const reCalc = (mousePosition: MousePosition): Position => {
  // Calculate rectangle position
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3 + 'px';
  let top = y3 + 'px';
  let width = x4 - x3 + 'px';
  let height = y4 - y3 + 'px';
  return { left: left, top: top, width: width, height: height };
};

export { collisionDetection, reCalc, reCalcWithoutPixelString };
