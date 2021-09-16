# Description

This project introduces the following topics:
• Data Engineering (Parallel and distributed DBMS, Object-relational and OO DBMS, Semi-structuriered modelling, NoSQL DBMS, Data integration)
• Web Engineering (Virtualization, Containertechnology, Cloudcomputing)
• Security Engineering (Basic security services, encryption, security protocols)


In practice this includes:

• Specification of an Information System
• Implementation IS based on relational DBMS
• Migration Relational-NoSQL


The implementation is split into three Milestones:


 ### Milestone 1 (Specification of IS) ###

Conceptual Modeling (of the chosen reality domain) which includes:
• (large-scale) Business Model Outline/Description 
• Entity-Relationship model (Chen notation) 
• Use-Case Design (3 main and 2 elaborate Use-Cases)
	• Detailed textual description (1 point)
	• Graphical representation of dynamics (UML Activity diagram or BPMN) 


*Elaborate reporting / data analysis use-case must join at least 3 entities



### Milestone 2 (: Implementation of IS based on relational DBMS) ###


• Configuration of Infrastructure 
	• IS container composition and network isolation
	• Secure deployment (https, port exposure) 

• Logical/Physical database design 
	• Relational model and normalization 
	• Implementation with relational DBMS 

• Data import 
	• Filling of tables via a programming language (e.g. Java and JDBC, HTTP/REST,…)

• Implementation Web system (relational DBMS) 
	• Realization of 2 use cases per team member. A main business use case (needs to create some data) and an elaborate
		reporting / data analysis use case (needs to reflect the data created by the main use case) per team member.



### Milestone 3 (Migration Relational-NoSQL) ###


• NoSQL Database design 
	• NoSQL design (collections, documents, indices, …) 
	• Explain why your chosen design is the best performing for the implemented use cases (scalability, read/write ratio, …) 
	•  Show and compare the SELECT statements of both elaborate use cases from M2 to MongoDB query statements 

•  Data migration (5 points)
	• Transfer of data via programming language (e.g. Java, Python, Ruby, …)

•  Implementation IS (NoSQL) (5 points)
	• Realization of all Use-Cases from Milestone 2 based on NoSQL DBMS
