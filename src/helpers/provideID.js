import { nanoid } from "nanoid";

const provideID = (arr, n) => arr.forEach((el) => (el.id = nanoid(n)));

export default provideID;
