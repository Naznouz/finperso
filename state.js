// State Management class
export class State {
  static _instance = null

  constructor () {
    if (State._instance) {
      return State._instance
    }
    State._instance = this
    this._state = {}
    this._listeners = [];
    if (!localStorage.getItem('state')) {
      this.state = {
        data: []
      }
    } else {
      this.state = JSON.parse(localStorage.getItem('state'))
    }
  }

  get state () {
    return this._state
  }

  set state (val) {
    for (let l of this._listeners) {
        l();
    }
    
    this._state = {
      ...this._state,
      ...val
    }
    localStorage.setItem('state', JSON.stringify(this._state))
  }

  addListener(callback) {
    this._listeners.push(callback)
  }
}

export function useState () {
  return new State()
}
