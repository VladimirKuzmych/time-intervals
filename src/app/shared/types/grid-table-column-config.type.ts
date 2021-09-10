import { TemplateRef } from '@angular/core';

export type GridTableColumnConfigType = {
    key: string;
    title?: string;
    template?: TemplateRef<any>;
}
