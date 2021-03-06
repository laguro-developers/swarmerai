/*
 *  Copyright 2019 Laguro, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { _mapKeys, _get, _isNull, _pick } from './lodashUtils';
import { GQL_OBJECT_ID_FIELD_NAME } from './gqlObjectUtils';

export const CATEGORY_FIELD_NAME = 'category';
export const NAME_FIELD_NAME = 'name';
export const DESCRIPTION_FIELD_NAME = 'description';
export const LABEL_FIELD_NAME = 'default configurations';
export const NUM_VALIDATION_FIELD_NAME = 'number-of-validations';
export const BUCKET_NAME_FIELD_NAME = 'image-bucket-name';
export const CLASSIFICATION_TYPE_FIELD_NAME = 'classification-type';
export const IS_CLASS_REPEATABLE_FIELD_NAME = 'is-class-repeatable?';
export const QUESTION_FIELD_NAME = 'question';
export const CLASSES_FIELD_NAME = 'classes';
export const IMAGE_HEIGHT_FIELD_NAME = 'image-height';
export const IMAGE_WIDTH_FIELD_NAME = 'image-width';

export const PROJECT_NAME_FIELD_NAME = 'name';
export const PROJECT_CREATOR_FIELD_NAME = 'creator';
export const PROJECT_CATEGORY_FIELD_NAME = 'category';
export const PROJECT_CURRENT_JOB_FIELD_NAME = 'currentJob';
export const BACKEND_PROJECT_VALIDATION_FIELD_NAME = 'validation';
export const BACKEND_PROJECT_BUCKET_URL_FIELD_NAME = 'bucketName';
export const BACKEND_PROJECT_TYPE_FIELD_NAME = 'type';
export const BACKEND_PROJECT_REPEATABLE_FIELD_NAME = 'repeatable';
export const BACKEND_PROJECT_WIDTH_FIELD_NAME = 'width';
export const BACKEND_PROJECT_HEIGHT_FIELD_NAME = 'height';
export const BACKEND_PROJECT_JOBS_FIELD_NAME = 'jobs';
export const BACKEND_PROJECT_TOP_CONTRIBUTORS_FIELD_NAME = 'topContributors';

export const GQL_OBJECT_FIELD_NAME_TO_FORM_FIELD_NAME = {
  [BACKEND_PROJECT_VALIDATION_FIELD_NAME]: NUM_VALIDATION_FIELD_NAME,
  [BACKEND_PROJECT_BUCKET_URL_FIELD_NAME]: BUCKET_NAME_FIELD_NAME,
  [BACKEND_PROJECT_TYPE_FIELD_NAME]: CLASSIFICATION_TYPE_FIELD_NAME,
  [BACKEND_PROJECT_REPEATABLE_FIELD_NAME]: IS_CLASS_REPEATABLE_FIELD_NAME,
  [BACKEND_PROJECT_WIDTH_FIELD_NAME]: IMAGE_WIDTH_FIELD_NAME,
  [BACKEND_PROJECT_HEIGHT_FIELD_NAME]: IMAGE_HEIGHT_FIELD_NAME,
};

const FORM_FIELD_NAME_TO_GQL_OBJECT_FIELD_NAME = {
  [NUM_VALIDATION_FIELD_NAME]: BACKEND_PROJECT_VALIDATION_FIELD_NAME,
  [BUCKET_NAME_FIELD_NAME]: BACKEND_PROJECT_BUCKET_URL_FIELD_NAME,
  [CLASSIFICATION_TYPE_FIELD_NAME]: BACKEND_PROJECT_TYPE_FIELD_NAME,
  [IS_CLASS_REPEATABLE_FIELD_NAME]: BACKEND_PROJECT_REPEATABLE_FIELD_NAME,
  [IMAGE_WIDTH_FIELD_NAME]: BACKEND_PROJECT_WIDTH_FIELD_NAME,
  [IMAGE_HEIGHT_FIELD_NAME]: BACKEND_PROJECT_HEIGHT_FIELD_NAME,
};

const ProjectFormFieldNames = [
  CATEGORY_FIELD_NAME,
  NAME_FIELD_NAME,
  DESCRIPTION_FIELD_NAME,
  BUCKET_NAME_FIELD_NAME,
  NUM_VALIDATION_FIELD_NAME,
  QUESTION_FIELD_NAME,
  CLASSIFICATION_TYPE_FIELD_NAME,
  IS_CLASS_REPEATABLE_FIELD_NAME,
  CLASSES_FIELD_NAME,
  IMAGE_HEIGHT_FIELD_NAME,
  IMAGE_WIDTH_FIELD_NAME,
];

export const getProjectForForm = project =>
  _pick(
    _mapKeys(
      project,
      (_, key) => GQL_OBJECT_FIELD_NAME_TO_FORM_FIELD_NAME[key] || key,
    ),
    ProjectFormFieldNames,
  );

export const getProjectForGqlCall = project =>
  _mapKeys(
    project,
    (_, key) => FORM_FIELD_NAME_TO_GQL_OBJECT_FIELD_NAME[key] || key,
  );

export const getProjectName = project => project[PROJECT_NAME_FIELD_NAME];

// receives project object from backend
export class Project {
  constructor(project) {
    this.content = project;
  }

  getId = () => this.content[GQL_OBJECT_ID_FIELD_NAME]
  getName = () => this.content[PROJECT_NAME_FIELD_NAME]
  getCurrentJobId = () =>
    _get(this.content, `${PROJECT_CURRENT_JOB_FIELD_NAME}.id`)
  getCurrentJob = () => _get(this.content, `${PROJECT_CURRENT_JOB_FIELD_NAME}`)
  hasCurrentJob = () => !_isNull(this.getCurrentJob())
  getTopContributors = () =>
    this.content[BACKEND_PROJECT_TOP_CONTRIBUTORS_FIELD_NAME]
  getJobs = () => this.content[BACKEND_PROJECT_JOBS_FIELD_NAME]
}
