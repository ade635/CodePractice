using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace apc.CodePractice.mvc.Models
{
    public class Matrix
    {
        public int numrows { get; set; }
        public int numcols { get; set; }
        public List<int> values { get; set; }
    }
}