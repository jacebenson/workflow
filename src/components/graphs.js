export const flows = {
  'Standard Zero Approval One Task Serial': `graph LR
  S0(Start)
  T1(Task 1)
  E0(End)
  
  S0-->T1
  T1-->E0`,
  'Standard Zero Approval Two Task Parallel': `graph LR
  S0(Start)
  T1(Task 1)
  T2(Task 2)
  E0(End)
  
  S0-->T1
  S0-->T2
  T1-->E0
  T2-->E0`,
  'Standard Zero Approval Two Task Serial': `graph LR
  S0(Start)
  T1(Task 1)
  T2(Task 2)
  E0(End)
  
  S0-->T1
  T1-->T2
  T2-->E0`,
  'Standard One Approval One Task Serial': `graph LR
  S0(Start)
  A1(Approval 1)
  T1(Task 1)
  E0(End)
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->T1
  T1-->E0`,
  'Standard One Approval Two Task Parallel': `graph LR
  S0(Start)
  A1(Approval 1)
  T1(Task 1)
  T2(Task 2)
  J0(Join)
  E0(End)
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->T1
  A1--Approved-->T2
  T1-->J0
  T2-->J0
  J0-->E0`,
  'Standard One Approval Two Task Parallel': `graph LR
  S0(Start)
  A1(Approval 1)
  T1(Task 1)
  T2(Task 2)
  E0(End)
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->T1
  T1-->T2
  T2-->E0`,
  'Standard Two Approval OneTaskSerial': `graph LR
  S0(Start)
  A1(Approval 1)
  A2(Approval 2)
  T1(Task 1)
  E0(End)
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->A2
  A2--Rejected-->E0
  A2--Approved-->T1
  T1-->E0`,
  'Standard Two Approval Two Task Parallel': `graph LR
  S0(Start)
  A1(Approval 1)
  A2(Approval 2)
  T1(Task 1)
  T2(Task 2)
  J0(Join)
  E0(End)
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->A2
  A2--Approved-->T1
  A2--Approved-->T2
  A2--Rejected-->E0
  T1-->J0
  T2-->J0
  J0-->E0`,
  'Standard Two Approval Two Task Parallel': `graph LR
  S0(Start)
  A1(Approval 1)
  A2(Approval 2)
  T1(Task 1)
  T2(Task 2)
  E0(End)
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->A2
  A2--Rejected-->E0
  A2--Approved-->T1
  T1-->T2
  T2-->E0`,
  'Flow Chart': `graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
              `,
  'Sequence Diagram': `sequenceDiagram
  Alice->>+John: Hello John, how are you?
  Alice->>+John: John, can you hear me?
  John-->>-Alice: Hi Alice, I can hear you!
  John-->>-Alice: I feel great!`,
  'Class Diagram': `classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal <|-- Zebra
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck{
    +String beakColor
    +swim()
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }
  class Zebra{
    +bool is_wild
    +run()
  }`,
  'State Diagram': `stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]`,
  'Gantt Chart': `gantt
  title A Gantt Diagram
  dateFormat  YYYY-MM-DD
  section Section
  A task           :a1, 2014-01-01, 30d
  Another task     :after a1  , 20d
  section Another
  Task in sec      :2014-01-12  , 12d
  another task      : 24d`,
  'Pie Chart': `pie title Pets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15`,
  'ER Diagram': `erDiagram
  CUSTOMER }|..|{ DELIVERY-ADDRESS : has
  CUSTOMER ||--o{ ORDER : places
  CUSTOMER ||--o{ INVOICE : "liable for"
  DELIVERY-ADDRESS ||--o{ ORDER : receives
  INVOICE ||--|{ ORDER : covers
  ORDER ||--|{ ORDER-ITEM : includes
  PRODUCT-CATEGORY ||--|{ PRODUCT : contains
  PRODUCT ||--o{ ORDER-ITEM : "ordered in"`,
  'Can ServiceNow Integrate': `graph TD
  
  InitSN[Initiated by Servicenow]
  InitOut[Initiated by Outside System]
  
  AppExposesAPIs{Does the App<br/> expose APIs}
  AppRunsSupportedDB{Does the app run<br/> a supported DB?}
  AppExportToFile{Can the App<br/> export to a<br/> file?}
  AppWSCalls{Can the App<br/> make Web<br/> Service calls?}
  AppEmail{Can the App<br/> Email out?}
  AppODBCDataSource{Can the App<br/> connect to a<br/> ODBC Data<br/> Source?}
  
  UseDataSource[Use a Data Source]
  UseJDBCDataSource[Use JDBC Data Source]
  UseOutboundWS[Use Outbound Webservices]
  UseInboundActions[Use Inbound Actions]
  UseStandardSNWS[Use Standard Servicenow APIs]
  UseOBDCConnector[Use ODBC Connector]
  No1[No we cannot integrate]
  No2[No we cannot integrate]
  
  
  InitSN            -- Creating Data-->AppExposesAPIs
  InitSN            -- Pulling Data -->AppRunsSupportedDB
  AppRunsSupportedDB-- No           -->AppExportToFile
  AppRunsSupportedDB-- Yes          -->UseJDBCDataSource
  AppExportToFile   -- No           -->AppExposesAPIs
  AppExportToFile   -- Yes          -->UseDataSource
  AppExposesAPIs    -- No           -->No1
  AppExposesAPIs    -- Yes          -->UseOutboundWS
  
  
  InitOut           -- Creating Data-->AppEmail
  InitOut           -- Pulling Data -->AppWSCalls
  AppEmail          -- No           -->AppWSCalls
  AppEmail          -- Yes          -->UseInboundActions
  AppWSCalls        -- No           -->AppODBCDataSource
  AppWSCalls        -- Yes          -->UseStandardSNWS
  AppODBCDataSource -- No           -->No2
  AppODBCDataSource -- Yes          -->UseOBDCConnector`,
  'Certificate Integration': `sequenceDiagram
  participant ui as User Interactions
  participant sn as Servicenow
  participant ms as MidServer
  participant co as Certificate Authority
  ui->>sn: User Requests Cert
  sn->>ms: Run generate-csr-key.js
  ms->>co: CSR,KEY, and Enrolls Cert
  co->>sn: Returns Order #
  loop Download
  sn->>sn: Waits 2 minutes
  sn->>ms: Run download-zip-and-upload-cert.js
  ms->>co: Download Cert
  co->>sn: Cert Processing
  end
  co->>ms: Cert Downloaded
  ms->>ms: Generate CRT
  ms->>ms: Generate PFX
  ms->>ms: Zip CRT, PFX, P7B
  ms->>sn: Send Zip to SN
  sn->>ui: Notify user with zip file`,
  'Concept Approval Task': `graph LR
  Start[Start] --> Approval[Manager Approval]
  Approval--Approved--> Task[Fulfiller Task]
  Task-->End
  Approval--Rejected--> End
  subgraph Fulfiller Task
    FTAssigned[Task Assigned to Group]-->FTEmailGroup[Email To Group]
    FTEmailGroup-->TaskComplete[Task Complete]
  end`,
  'Concept Cloud V1 Discovery': `graph TD
  SN3[Weeky ServiceNow asks <Br/>for each Account and<br/> each datacenter for resources]
  
  L0[Loop over each resource]
  P0[Process responses<br/>sometimes this contains<br/>terminate but only for<br/> less than an hour]
  SN3 --rest call to AWS-->L0
  L0 --> P0
  P0 --Create--> C0[Create CIs]
  P0 --Update--> U0
  SNS0[AWS SNS]
  SNS0--Create-->SN0[ServiceNow]
  SN0-->C0
  SNS0--Update-->SN1[ServiceNow]
  SN1-->U0[Update CI]
  SNS0--Delete-->SN2[ServiceNow]
  SN2-->D0[Terminate CI]
  subgraph CUSTOM
  SN4[Daily Servicenow looks<br/> for records with sys_updated<br/>older than 14 days]
  end
  SN4--Change state to retired-->D0`,
  'Concept Dev Intake': `graph TB
  subgraph New
    NEW(State: New)
    A+D(State: Analysis + Design)
  end
  subgraph Backlog
    BAC(State: Backlog)
  end
  subgraph In Progress
    DEV(State: Development + Testing)  
    REQ(Approval: Requested)
    PRO(State: Production Change)
    DEP(State: Deploy)
  end
  subgraph Closed
    COM(State: Closed Complete)
  end
  CIN(State: Closed Incomplete)
  
  NEW--Removed-->CIN
  NEW--Requirements Clear: No-->A+D
  NEW--Requirements Clear: Yes-->BAC
  A+D--Removed-->CIN
  A+D-->BAC
  BAC-->DEV
  DEV--Work done-->REQ
  REQ--Approved-->PRO
  REQ--Rejected-->DEV
  PRO--Moved to other environments-->DEP
  DEP--Promoted-->COM`,
  'Concept Dev Intake V2': `graph TB
  subgraph New
    NEW(State: New)
    A+D(State: Analysis + Design)
  end
  subgraph Backlog
    BAC(State: Backlog)
  end
  subgraph In Progress
    DEV(State: Development + Testing)  
    REQ(Approval: Requested)
    SPE(Copy Story)
    MVS(Move Original<br/>to Backlog or<br/>or next sprint)
  end
  subgraph Deploy
    PRO(State: Production Change)
    DEP(State: Deploy)
  end
  subgraph Closed
    COM(State: Closed Complete)
    CIN(State: Closed Incomplete)
  end
  
  NEW--Removed-->CIN
  NEW--Requirements Clear: No-->A+D
  NEW--Requirements Clear: Yes-->BAC
  A+D--Removed-->CIN
  A+D-->BAC
  BAC-->DEV
  DEV--Sprint Ended-->SPE
  DEV--Work done-->REQ
  REQ--Sprint Ended-->SPE
  SPE-->MVS
  MVS--Close Copy-->CIN
  REQ--Approved-->PRO
  REQ--Rejected-->DEV
  PRO--Moved to other environments-->DEP
  DEP--Promoted-->COM`,
  'Concept Event Mgmt Intake': `graph TD
  OS(Outside System)
  SN(Servicenow)
  SE(Event)
  SA(Alert<br/>Depending on Monitor, CI, or states)
  SR(Record)
  E0(End)
  
  OS--Sends in event-->SN
  SN-->SE
  SE-->SA
  SA--Suppressed-->E0
  SA--Not Suppressed-->SR
  SR-->E0`,
  'Concept Integration Via Task': `graph TD
  Start[Start]
  Task1[Task 1]
  Task2[Task 2]
  System1[System 1]
  System2[System 2]
  End[End]
  
  Start[Start] --> Task1
  Start[Start] --> Task2
  Task1-->Join
  Task2-->Join
  Join-->End
  subgraph SN Outbound Task Automation
    Task1--API Call-->System1
    System1--Does work to automate work-->System1
    System1--API Call to Close and Comment-->Task1
  end
  
  subgraph SN Inbound Task Automation
    System2--On a schedule polls for tasks from SN-->System2
    System2--API Call for Tasks Closes Task when complete-->Task2
  end`,
  'Concept Order Of Operations': `sequenceDiagram
  participant uxux as User Interactions
  participant csup as UI Policy
  participant cscs as Client Script
  participant ssss as Server Side
  participant eeee as Engines
  participant dbdb as Database
  uxux->>ssss: Form Request
  ssss->>dbdb: Query Business Rules
  dbdb->>ssss: Display Business Rules
  ssss->>cscs: OnLoad Client Scripts
  cscs->>csup: OnLoad UI Policies
  csup->>uxux: Form loaded
  loop Every Change
      uxux->>ssss: ref_qual_element field changes
      ssss->>cscs: OnChange Client Scripts
      cscs->>csup: OnChange UI Policies
      csup->>uxux: Form Updated
  end
  uxux->>csup: Form Submit(client)
  csup->>cscs: OnSubmit Client Scripts
  cscs->>ssss: Form Submit(server)
  ssss->>eeee: Before Business Rules <1000
  eeee-->ssss: Approval engine
  eeee-->ssss: Assignment rules engine
  eeee-->ssss: Data policy engine
  eeee-->ssss: Escalation engine
  eeee-->ssss: Field normalization engine
  eeee-->ssss: Role engine
  eeee-->ssss: Execution plan engine
  eeee-->ssss: Update version engine
  eeee-->ssss: Workflow engine (for default workflows)
  eeee->>ssss: Before Business Rules >=1000
  ssss->>dbdb: Database Update
  dbdb->>ssss: After Business Rules <1000
  ssss-->eeee: Label engine
  ssss-->eeee: Listener engine
  ssss-->eeee: Table notifications engine
  Note right of eeee: This creates sysevents that process later
  ssss-->eeee: Role engine
  ssss-->eeee: Text indexing engine
  ssss-->eeee: Update sync engine
  ssss-->eeee: Data lookup engine inserts or updates
  ssss-->eeee: Workflow engine (for deferred workflows)
  ssss-->eeee: Trigger engine (for all Flow Designer flows)
  eeee->>ssss: After Business Rules >=1000
  ssss->>dbdb: Query Business Rules
  ssss-->dbdb: Async Business Rules
  Note right of eeee: This creates sys_triggers that process later
  dbdb->>ssss: Display Business Rules
  ssss->>uxux: Return UI
  
  Note over uxux,dbdb: Thanks to http://www.snc-blog.com/2017/02/02/script-execution-flow/`,
  'Concept Transform Map Order': `graph TD
  E1(onStart - Before the Import Rows are read)
  E2(onBefore - Before each Import Row is read)
  E3(onForeignInsert - Creates a Foreign Record<br/>onChoiceCreate</div> - Creates Choice Record)
  E4(onReject - If triggered entire Import Row is skipped)
  E5(onAfter - After the Import Row is read)
  E6(onComplete - After all the Import Rows are read)
  
  E1-->E2
  E2-->E3
  E3--Creates other Record-->E5
  E3--Fails to Create-->E4
  E4-->E5
  E5--No More Rows-->E6
  E5--More Rows-->E2`,
  'Pattern If Branch': `graph LR
  S0[Start]
  T0[Timer]
  I1[If Ergonomic Split]
  I2[If Ergonomic]
  I3[If Gaming]
  I4[If Standard]
  T1[Task 1]
  T2[Task 2]
  T3[Task 3]
  T4[Task 4]
  B1[Branch 1]
  B2[Branch 2]
  B3[Branch 3]
  B4[Branch 4]
  J0[Join]
  R0[Run Script]
  E0[End]
  
  S0-->T0
  T0-->I1
  T0-->I2
  T0-->I3
  T0-->I4
  I1--No-->B1
  I2--No-->B2
  I3--No-->B3
  I4--No-->B4
  I1--Yes-->T1
  I2--Yes-->T2
  I3--Yes-->T3
  I4--Yes-->T4
  T1-->B1
  T2-->B2
  T3-->B3
  T4-->B4
  B1-->J0
  B2-->J0
  B3-->J0
  B4-->J0
  J0-->R0
  R0-->E0`,
  'Pattern Integration Import Set': `graph TD
  
  SN1(ServiceNow)
  SN2(ServiceNow)
  SN3(ServiceNow)
  SN4(ServiceNow)
  OS1(Other System)
  OS2(Other System)
  OS4(Other System)
  TM1(Transform Map)
  TM2(Transform Map)
  TM4(Transform Map)
  EN1(End)
  EN2(End)
  EN3(End)
  EN4(End)
  
  subgraph One record at a time SN Pulls
    SN1--Asks for data-->OS1
    OS1--Replies-->SN1
    SN1--Inserts one record at time to process on the import set row level-->TM1
    TM1--Creates Records-->EN1
  end
  subgraph One record at a time Other System Pushs
    OS2--Sends data in to Import Set API-->SN2
    SN2--Inserts one record at time to process on the import set row level-->TM2
    TM2--Creates Records-->EN2
  end
  subgraph Many records at a time SN Pulls
    SN3--Dont do it-->EN3
  end
  subgraph Many records at a time OS Pushes
    OS4--Sends many records in to Scripted Rest API-->SN4
    SN4--Inserts one record at time to process on the import set row level-->TM4
    TM4--Creates Records-->EN4
  end
  `,
};
