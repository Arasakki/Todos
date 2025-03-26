import { v4 as uuidv4 } from "uuid";

class StringUtils {
  public static generateUUID = (): string => uuidv4();
}

export default StringUtils;
