import type { AutoformatRule } from '@udecode/plate-autoformat';

import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { MARK_HIGHLIGHT } from '@udecode/plate-highlight';

import { filterNode } from './autoformatUtils';

export const autoformatMarks: AutoformatRule[] = [
  {
    match: '***',
    mode: 'mark',
    query: filterNode,
    type: [MARK_BOLD, MARK_ITALIC],
  },
  {
    match: '__*',
    mode: 'mark',
    query: filterNode,
    type: [MARK_UNDERLINE, MARK_ITALIC],
  },
  {
    match: '__**',
    mode: 'mark',
    query: filterNode,
    type: [MARK_UNDERLINE, MARK_BOLD],
  },
  {
    match: '___***',
    mode: 'mark',
    query: filterNode,
    type: [MARK_UNDERLINE, MARK_BOLD, MARK_ITALIC],
  },
  {
    match: '**',
    mode: 'mark',
    query: filterNode,
    type: MARK_BOLD,
  },
  {
    match: '__',
    mode: 'mark',
    query: filterNode,
    type: MARK_UNDERLINE,
  },
  {
    match: '*',
    mode: 'mark',
    query: filterNode,
    type: MARK_ITALIC,
  },
  {
    match: '_',
    mode: 'mark',
    query: filterNode,
    type: MARK_ITALIC,
  },
  {
    match: '~~',
    mode: 'mark',
    query: filterNode,
    type: MARK_STRIKETHROUGH,
  },
  {
    match: '^',
    mode: 'mark',
    query: filterNode,
    type: MARK_SUPERSCRIPT,
  },
  {
    match: '~',
    mode: 'mark',
    query: filterNode,
    type: MARK_SUBSCRIPT,
  },
  {
    match: '==',
    mode: 'mark',
    query: filterNode,
    type: MARK_HIGHLIGHT,
  },
  {
    match: '≡',
    mode: 'mark',
    query: filterNode,
    type: MARK_HIGHLIGHT,
  },
  {
    match: '`',
    mode: 'mark',
    query: filterNode,
    type: MARK_CODE,
  },
];
