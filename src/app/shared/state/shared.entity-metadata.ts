import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Todo: {},
};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
}