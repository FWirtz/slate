/** @jsx h */

import h from '../../../../helpers/h'
import { Set } from 'immutable'
import { Mark } from '../../../../..'

export const input = (
  <text>
    <b>
      <i>Cat is </i>
      Cute
    </b>
  </text>
)[0]

export default function(t) {
  return t.getActiveMarks()
}

export const output = Set.of(Mark.create('bold'))
