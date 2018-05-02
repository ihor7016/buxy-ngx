import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { SharedModule } from "../shared/shared.module";

import { TransactionsComponent } from "./transactions/transactions.component";
import { TransactionDialogComponent } from "./transaction-dialog/transaction-dialog.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { TableTransactionsComponent } from "./table-transactions/table-transactions.component";

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionDialogComponent,
    TableTransactionsComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [ChartsModule, SharedModule],
  exports: [TransactionsComponent],
  entryComponents: [TransactionDialogComponent]
})
export class TransactionsModule {}
