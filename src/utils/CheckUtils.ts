export default class CheckUtils {
  public static checkEquality(
    oldValue: Entity | null | undefined,
    newValue: Entity | null | undefined
  ) {
    return oldValue?.id === newValue?.id;
  }
  public static checkArraysEquality(oldValues: Entity[], newValues: Entity[]) {
    if (oldValues.length !== newValues.length) {
      return false;
    }

    return oldValues.every((value, index) =>
      this.checkEquality(value, newValues[index])
    );
  }
}
