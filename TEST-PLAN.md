Note: turn off word wrap for text to appear aligned hotkeys alt+Z
Once I have reviewed any Spec document I would write a number of basic tests for the search below are a example of some of the test I would write. I have stuck to the two hours for the combined task. hence the smaller number of cases as there is a lt more you could do. 


# 	OBJECTIVE   	                                    INPUT       	     			                    EXPECTED RESULTS 	     					                            TEST DELIVERABLES
1 	Check the location search works correctly		    Search for "manchester"    	                        Search results for manchester should be returned		                Test shows location search works
2   Check the job search works correctly                Search for "Care"                                   Search results for Care should be returned UK wide                      Test shows job search works
3   Check both job and location search works            Search for "Care" and "manchester"                  Search results for Care in Manchester should be returned                Test shows job and location search works
4   Check that search area can be expanded              Search for "manchester" expand search to 50 miles   Search results for manchester should be returned with a larger radius   Test shows area drop down works
5   Check that valid search with no results works       Search for "Southtown"                              Search returns no results                                               Test shows no results are returned
6   Check that invaild searches return no results       Search for "1234"                                   Search returns no results                                               Test shows no results are returned
7   Check that search handles a Sript attack            Search for "<Script>alert(1)</Script>"              Search returns no results or <> are blocked                             Test shows attacks are blocked