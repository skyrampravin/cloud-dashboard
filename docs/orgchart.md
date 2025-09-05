```mermaid
flowchart TD
	InfraLead["<b>CLoud Infra</b><br>Sample Lead 1"]:::lead
	CloudEng["<b>Cloud Engineers</b><br>Sample Engineer 1<br>Sample Engineer 2"]:::engineer
	NetSpec["<b>Network Specialists</b><br>Sample Network 1<br>Sample Network 2"]:::network
	Support["<b>Support</b><br>Sample Support 1"]:::support

	InfraLead --> CloudEng
	InfraLead --> NetSpec
	InfraLead --> Support

	classDef lead fill:#4F8EF7,stroke:#333,stroke-width:2px,color:#fff,font-size:16px;
	classDef engineer fill:#A7C7E7,stroke:#333,stroke-width:1.5px,color:#222,font-size:15px;
	classDef network fill:#E3F2FD,stroke:#333,stroke-width:1.5px,color:#333,font-size:15px;
	classDef support fill:#FFD54F,stroke:#333,stroke-width:1.5px,color:#333,font-size:15px;
```

<!-- Replace the sample names and roles with your actual team details as needed. -->
