const track1Name = 'Aula'
const track2Name = 'SF 2.162'
const track3Name = 'SF 1.141'

export const data = [
    {
    'days': [
        {
            'date': '2022-09-12',
            'name': 'Den 1',
            'tracks':[
                {
                    'title': track1Name,
                    'sessions': [
                        {
                            'title': 'Azure SQL Managed Instance Intro',
                            'description': 'O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem mimo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'Marek Chmel',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=small',
                                    'role': 'MVP, MCT, MCSE' 
                                }
                            ]
                        },
                        {
                            'title': 'Lessons learned from Azure SQL Servers',
                            'description': 'Resource allocation in Azure is not as straightforward as it may look. Let\'s discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Michal Tinthofer',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                    'role': 'MCT, MCITP, MCTS, Woodler' 
                                }
                            ]
                        },
                    ]
                },
                {
                    'title': track2Name,
                    'sessions': [
                        {
                            'title': 'Novinky v Microsoft SQL Serveru 2022',
                            'description': 'Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'David Gešvindr',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=small',
                                    'role': 'MVP, MCT, MCSE' 
                                }
                            ]
                        },
                        {
                            'title': 'Parametr, literál nebo proměnná – proč bych se měl zajímat?',
                            'description': 'K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Pavel Málek',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2930&ThumbnailSizeName=small',
                                    'role': '' 
                                }
                            ]
                        },
                    ]
                },
                {
                    'title': track3Name,
                    'sessions': [
                        {
                            'title': 'Power BI 101',
                            'description': 'Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'Štěpán Bechynský',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=small',
                                    'role': '' 
                                }
                            ]
                        },
                        {
                            'title': 'Interaktivní reporty v Power BI a calculation groups',
                            'description': 'Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Jiří Neoral',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=small',
                                    'role': 'MVP' 
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            'date': '2022-09-13',
            'name': 'Den 2',
            'tracks':[
                {
                    'title': track1Name,
                    'sessions': [
                        {
                            'title': '2 Day',
                            'description': 'O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem mimo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'Marek Chmel',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=small',
                                    'role': 'MVP, MCT, MCSE' 
                                }
                            ]
                        },
                        {
                            'title': 'Lessons learned from Azure SQL Servers',
                            'description': 'Resource allocation in Azure is not as straightforward as it may look. Let\'s discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Michal Tinthofer',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                    'role': 'MCT, MCITP, MCTS, Woodler' 
                                }
                            ]
                        },
                    ]
                },
                {
                    'title': track2Name,
                    'sessions': [
                        {
                            'title': 'Novinky v Microsoft SQL Serveru 2022',
                            'description': 'Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'David Gešvindr',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=small',
                                    'role': 'MVP, MCT, MCSE' 
                                }
                            ]
                        },
                        {
                            'title': 'Parametr, literál nebo proměnná – proč bych se měl zajímat?',
                            'description': 'K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Pavel Málek',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                    'role': '' 
                                }
                            ]
                        },
                    ]
                },
                {
                    'title': track3Name,
                    'sessions': [
                        {
                            'title': 'Power BI 101',
                            'description': 'Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'Štěpán Bechynský',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=small',
                                    'role': '' 
                                }
                            ]
                        },
                        {
                            'title': 'Interaktivní reporty v Power BI a calculation groups',
                            'description': 'Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Jiří Neoral',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=small',
                                    'role': 'MVP' 
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            'date': '2022-09-14',
            'name': 'Den 3',
            'tracks':[
                {
                    'title': track1Name,
                    'sessions': [
                        {
                            'title': '3 Day',
                            'description': 'O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem mimo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'Marek Chmel',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=small',
                                    'role': 'MVP, MCT, MCSE' 
                                }
                            ]
                        },
                        {
                            'title': 'Lessons learned from Azure SQL Servers',
                            'description': 'Resource allocation in Azure is not as straightforward as it may look. Let\'s discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Michal Tinthofer',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                    'role': 'MCT, MCITP, MCTS, Woodler' 
                                }
                            ]
                        },
                    ]
                },
                {
                    'title': track2Name,
                    'sessions': [
                        {
                            'title': 'Novinky v Microsoft SQL Serveru 2022',
                            'description': 'Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'David Gešvindr',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=small',
                                    'role': 'MVP, MCT, MCSE' 
                                }
                            ]
                        },
                        {
                            'title': 'Parametr, literál nebo proměnná – proč bych se měl zajímat?',
                            'description': 'K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Pavel Málek',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                    'role': '' 
                                }
                            ]
                        },
                    ]
                },
                {
                    'title': track3Name,
                    'sessions': [
                        {
                            'title': 'Power BI 101',
                            'description': 'Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.',                          
                            'dateTimeStart': '2008-09-12T09:00',
                            'dateTimeEnd': '2008-09-12T10:15',
                            'speakers': [
                                {
                                    'name': 'Štěpán Bechynský',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=small',
                                    'role': '' 
                                }
                            ]
                        },
                        {
                            'title': 'Interaktivní reporty v Power BI a calculation groups',
                            'description': 'Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.',                          
                            'dateTimeStart': '2008-09-12T10:30',
                            'dateTimeEnd': '2008-09-12T11:45',
                            'speakers': [
                                {
                                    'name': 'Jiří Neoral',
                                    'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=small',
                                    'role': 'MVP' 
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
    }     
]