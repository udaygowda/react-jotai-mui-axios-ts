/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default class AppService {
  private _values: any = {};
  private _getters: any = {};
  private _saves: any = {};
  private _deletes: any = {};

  get values(): any {
    return this._values;
  }
  set values(value: any) {
    this._values = value;
  }

  get getters(): any {
    return this._getters;
  }
  set getters(value: any) {
    this._getters = value;
  }

  get saves(): any {
    return this._saves;
  }
  set saves(value: any) {
    this._saves = value;
  }

  get deletes(): any {
    return this._deletes;
  }
  set deletes(value: any) {
    this._deletes = value;
  }

  getData(name: string, args: any, refresh = false) {
    if (!refresh) {
      if (args && args.id && this.values[name] && this.values[name][args.id]) {
        return this.values[name][args.id];
      }

      if (this.values[name] && !(args && args.id)) {
        return this.values[name];
      }
    }

    const curVar = this.getters[name](args);
    // need to override the catch method here if there's an error
    // nullify the value so it won't get cached
    curVar.catch((error: any) => {
      this.values[name] = null;
      return Promise.reject(error);
    });

    if (args && args.id) {
      this.values[name] = {
        ...this.values[name],
        [args.id]: curVar,
      };
    } else {
      this.values[name] = curVar;
    }
    return curVar;
  }

  deleteData(name: string, args: any) {
    let curVar = this.values[name];
    if (!this.values[name]) {
      curVar = {};
    }
    let timestamp = Date.now();
    while (curVar[timestamp]) {
      timestamp++;
    }

    if (curVar.length > 50) {
      curVar.shift();
    }

    curVar[timestamp] = this.deletes[name].bind(this)(args);
    return curVar[timestamp];
  }

  saveData(name: string, args: any) {
    let curVar = this.values[name];
    if (!this.values[name]) {
      curVar = {};
    }
    let timestamp = Date.now();
    while (curVar[timestamp]) {
      timestamp++;
    }

    if (curVar.length > 50) {
      curVar.shift();
    }

    curVar[timestamp] = this.saves[name].bind(this)(args);
    return curVar[timestamp];
  }
}
