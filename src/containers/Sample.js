import * as React from 'react';
import { extend, addClass } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { SampleBase } from '../sample-base';
import * as dataSource from '../DataSources/datasource.json';

/**
 * Kanban Overview sample
 */
class Sample extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.cardData, null, true);
    this.fields = [
      { text: 'ID', key: 'Title', type: 'TextBox' },
      { key: 'Status', type: 'DropDown' },
      { key: 'Assignee', type: 'DropDown' },
      { key: 'RankId', type: 'TextBox' },
      { key: 'Summary', type: 'TextArea' },
    ];
  }
  cardRendered(args) {
    let val = args.data.Priority;
    addClass([args.element], val);
  }
  columnTemplate(props) {
    return (
      <div className="header-template-wrap">
        <div className={'header-icon e-icons ' + props.keyField}></div>
        <div className="header-text">{props.headerText}</div>
      </div>
    );
  }
  cardTemplate(props) {
    return (
      <div className={'card-template'}>
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-header-title e-tooltip-text">
              {props.Title}
            </div>
          </div>
        </div>
        <div className="e-card-content e-tooltip-text">
          <div className="e-text">{props.Summary}</div>
        </div>
        <div className="e-card-custom-footer">
          {props.Tags.split(',').map((tag) => (
            <div className="e-card-tag-field e-tooltip-text">{tag}</div>
          ))}
          <div className="e-card-avatar">{this.getString(props.Assignee)}</div>
        </div>
      </div>
    );
  }
  getString(assignee) {
    return assignee
      .match(/\b(\w)/g)
      .join('')
      .toUpperCase();
  }
  render() {
    return (
      <div>
        <h2>Sample</h2>
        <div className="schedule-control-section">
          <div className="col-lg-12 control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                cssClass="kanban-overview"
                keyField="Status"
                dataSource={this.data}
                enableTooltip={true}
                swimlaneSettings={{ keyField: 'Assignee' }}
                cardSettings={{
                  headerField: 'Title',
                  template: this.cardTemplate.bind(this),
                  selectionType: 'Multiple',
                }}
                dialogSettings={{ fields: this.fields }}
                cardRendered={this.cardRendered.bind(this)}
              >
                <ColumnsDirective>
                  <ColumnDirective
                    headerText="To Do"
                    keyField="Open"
                    allowToggle={true}
                    template={this.columnTemplate.bind(this)}
                  />
                  <ColumnDirective
                    headerText="In Progress"
                    keyField="InProgress"
                    allowToggle={true}
                    template={this.columnTemplate.bind(this)}
                  />
                  <ColumnDirective
                    headerText="In Review"
                    keyField="Review"
                    allowToggle={true}
                    template={this.columnTemplate.bind(this)}
                  />
                  <ColumnDirective
                    headerText="Done"
                    keyField="Close"
                    allowToggle={true}
                    template={this.columnTemplate.bind(this)}
                  />
                  <ColumnDirective
                    headerText="Merging"
                    keyField="Close"
                    allowToggle={true}
                    template={this.columnTemplate.bind(this)}
                  />
                  <ColumnDirective
                    headerText="Finished"
                    keyField="Close"
                    allowToggle={true}
                    template={this.columnTemplate.bind(this)}
                  />
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
