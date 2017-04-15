<%
	response.charset = "utf-8"
	dim conn
	set conn = server.createobject("adodb.connection")
	conn.connectionstring="Provider = Microsoft.Jet.OLEDB.4.0;Data Source="&server.mapPath("db/guest.mdb") 
	conn.open 

	sub close_conn
		conn.close
		set conn = nothing
	end sub
%>