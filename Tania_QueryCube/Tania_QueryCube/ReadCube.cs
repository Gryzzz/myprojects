using Microsoft.AnalysisServices.AdomdClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tania_QueryCube
{
    class ReadCube
    {

        public DataSet GetData(int queryNum)
        {
            string[] queryList = new string[3] ;
            queryList[0] = "SELECT [Measures].[Orders Count] ON COLUMNS, [Stores- Table].[City].[City] ON ROWS FROM ( SELECT ( [Sales Person- Table].[Age].[42] : [Sales Person- Table].[Age].[66] ) ON COLUMNS FROM [Node Orders] )";
            queryList[1] = "SELECT [Measures].[Sales Person- Table Count] ON COLUMNS, [Sales Person- Table].[Age].[Age] ON ROWS FROM [Node Orders] WHERE [Stores- Table].[State].[WA]";
            queryList[2] = "SELECT [Measures].[Price] ON COLUMNS, NON EMPTY [Stores- Table].[City].[City] * [Sales Person- Table].[First Name].[First Name] * [Sales Person- Table].[Last Name].[Last Name] ON ROWS FROM [Node Orders]";
            string commandText = queryList[queryNum-1];

            //  " WHERE ([Sales Territory Country].[United States]) ";

            DataSet cubeDataSet = new DataSet();
            AdomdConnection ADOconnection = new AdomdConnection("Data Source=localhost;Catalog=DataCube_Tania");
            AdomdCommand ADOcommand = new AdomdCommand(commandText, ADOconnection);
            try
            {
                AdomdDataAdapter myDataAdapter = new AdomdDataAdapter();
                myDataAdapter.SelectCommand = ADOcommand;

                ADOconnection.Open();

                myDataAdapter.Fill(cubeDataSet, "CubeData");


                ADOconnection.Close();
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
            return cubeDataSet;
        }
    }
}
