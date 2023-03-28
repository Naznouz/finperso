// State Management class
export class State {
  static _instance = null

  constructor () {
    if (State._instance) {
      return State._instance
    }
    State._instance = this
    this._state = {}
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
    this._state = {
      ...this._state,
      ...val
    }
    localStorage.setItem('state', JSON.stringify(this._state))
  }
}

export function useState () {
  return new State()
}
