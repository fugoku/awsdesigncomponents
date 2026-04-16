// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import headerPlugin from '@tony.ganchev/eslint-plugin-header';
import jestPlugin from 'eslint-plugin-jest';
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized';
import eslintPrettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';
import path from 'node:path';
import tsEslint from 'typescript-eslint';

import cloudscapeCommonRules from '@cloudscape-design/build-tools/eslint/index.js';

import cloudscapeComponentsRules from './build-tools/eslint/index.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default tsEslint.config(
  includeIgnoreFile(path.resolve('.gitignore')),
  {
    // this code does not run, only used as a text content
    ignores: ['pages/code-editor/samples/**'],
  }
