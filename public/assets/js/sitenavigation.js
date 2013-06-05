/////////////////////////////////////////////////////////////////////////////
// Function : NavNode (constructor)
// Comments :
/////////////////////////////////////////////////////////////////////////////
function NavNode(id, label, href, parent)
{
	this.m_parent = null;
	this.m_level = 0;

	if (parent)
	{
		this.m_parent = parent;
		this.m_level = parent.m_level+1;
	}

	this.m_id = id;

	// assume that m_label will most often be used directly as HTML
	this.m_rawlabel = label;

	label = label.replace(/&/g, '&amp;');
	label = label.replace(/</g, '&lt;');
	label = label.replace(/>/g, '&gt;');
	label = label.replace(/"/g, '&quot;');

	this.m_label = label;

	this.m_href = href;
	this.m_subNodes = new Array();

	var argValues = NavNode.arguments;
	var argCount = NavNode.arguments.length;

	for (i = 4 ; i < argCount ; i++)
	{
		var eqPos = argValues[i].indexOf("==");
		var attrName = argValues[i].substring(0,eqPos);
		var attrValue = argValues[i].substring(eqPos+2);

		eval("this.cp_" + attrName + " = '" + attrValue + "';");
	}

	NavNode.prototype.addNode = addNode;
	NavNode.prototype.isSelected = isSelected;
}

/////////////////////////////////////////////////////////////////////////////
// Function : addNode
// Comments :
/////////////////////////////////////////////////////////////////////////////
function addNode(id, label, href)
{
	var newIndex = this.m_subNodes.length;
	var newNode = new NavNode(id, label, href, this);

	var argValues = addNode.arguments;
	var argCount = addNode.arguments.length;

	for (i = 3 ; i < argCount ; i++)
	{
		var eqPos = argValues[i].indexOf("==");
		var attrName = argValues[i].substring(0,eqPos);
		var attrValue = argValues[i].substring(eqPos+2);

		eval("newNode.cp_" + attrName + " = '" + attrValue + "';");
	}

	this.m_subNodes[newIndex] = newNode;
	return newNode;
}

/////////////////////////////////////////////////////////////////////////////
// Function : isSelected
// Comments :
/////////////////////////////////////////////////////////////////////////////
function isSelected()
{
    var pos = window.location.href.lastIndexOf("/");
    var docname = window.location.href.substring(pos+1, window.location.href.length);

    pos = this.m_href.lastIndexOf("/");
    var myname = this.m_href.substring(pos+1, this.m_href.length);

    if (docname == myname)
		return true;
	else
		return false;
}

/////////////////////////////////////////////////////////////////////////////
// Function : customSectionPropertyExists
// Comments :
/////////////////////////////////////////////////////////////////////////////
function customSectionPropertyExists(csp)
{
	return (typeof csp != _U && csp != null);
}

/////////////////////////////////////////////////////////////////////////////
// Function : getCustomSectionProperty
// Comments :
/////////////////////////////////////////////////////////////////////////////
function getCustomSectionProperty(csp)
{
	if (customSectionPropertyExists(csp))
	{
		return csp;
	}
	else
	{
		return "";
	}
}

/////////////////////////////////////////////////////////////////////////////

var g_navNode_Root = new NavNode('1381','Home',ssUrlPrefix + 'home.html',null,'CallToActionCDF==AHC_CONTENT_385941','CalltoActionCDF==AHC_CONTENT_385941','FooterCDF==AHC_CONTENT_375390','HeaderCDF==AHC_CONTENT_389696','ShowRelatedLinks==true','ShowWhatsInside==false','SideNavCDF==AHC_CONTENT_375325','secondaryUrlVariableField==region1');
g_navNode_0=g_navNode_Root.addNode('59529','About',ssUrlPrefix + 'about/index.htm');
g_navNode_0_0=g_navNode_0.addNode('58362','Creative Agency Services',ssUrlPrefix + 'about/creative-agency-services/index.htm');
g_navNode_1=g_navNode_Root.addNode('58262','Web Process',ssUrlPrefix + 'web-process/index.htm','secondaryUrlVariableField==region1');
g_navNode_1_0=g_navNode_1.addNode('58263','Define',ssUrlPrefix + 'web-process/define/index.htm','secondaryUrlVariableField==region1');
g_navNode_1_1=g_navNode_1.addNode('58264','Plan',ssUrlPrefix + 'web-process/plan/index.htm','secondaryUrlVariableField==region1');
g_navNode_1_2=g_navNode_1.addNode('58265','Build',ssUrlPrefix + 'web-process/build/index.htm','secondaryUrlVariableField==region1');
g_navNode_1_3=g_navNode_1.addNode('58266','Manage',ssUrlPrefix + 'web-process/manage/index.htm','secondaryUrlVariableField==region1');
g_navNode_1_3_0=g_navNode_1_3.addNode('60753','Analytics',ssUrlPrefix + 'web-process/manage/analytics/index.htm','secondaryUrlVariableField==region1');
g_navNode_2=g_navNode_Root.addNode('58267','Web Layouts, Themes, Downloads',ssUrlPrefix + 'web-layouts-themes-downloads/index.htm','secondaryUrlVariableField==region1');
g_navNode_2_0=g_navNode_2.addNode('58389','Current Theme',ssUrlPrefix + 'web-layouts-themes-downloads/current-theme/index.htm','secondaryUrlVariableField==region1');
g_navNode_2_0_0=g_navNode_2_0.addNode('51055','Layouts',ssUrlPrefix + 'web-layouts-themes-downloads/current-theme/layouts/index.htm','secondaryUrlVariableField==region1');
g_navNode_2_0_0_43=g_navNode_2_0_0.addNode('58390','Layouts categorized by features',ssUrlPrefix + 'web-layouts-themes-downloads/current-theme/layouts/layouts-categorized-by-features/index.htm','secondaryUrlVariableField==region1');
g_navNode_2_0_0_44=g_navNode_2_0_0.addNode('58404','Layouts categorized by columns',ssUrlPrefix + 'web-layouts-themes-downloads/current-theme/layouts/Layouts-categorized-by-columns/index.htm','secondaryUrlVariableField==region1');
g_navNode_2_0_1=g_navNode_2_0.addNode('58269','Websites in the Current Theme',ssUrlPrefix + 'web-layouts-themes-downloads/current-theme/websites-in-the-current-theme/index.htm','secondaryUrlVariableField==region1');
g_navNode_2_0_2=g_navNode_2_0.addNode('48166','Downloads',ssUrlPrefix + 'web-layouts-themes-downloads/current-theme/html-downloads/index.htm','contributorOnly==false');
g_navNode_3=g_navNode_Root.addNode('56637','Training',ssUrlPrefix + 'training/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0=g_navNode_3.addNode('58271','UM Content',ssUrlPrefix + 'training/um-content/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_0=g_navNode_3_0.addNode('59172','UM Content Basics',ssUrlPrefix + 'training/um-content/umcontent-basics/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_1=g_navNode_3_0.addNode('59173','UM Content Manager Tool',ssUrlPrefix + 'training/um-content/umcontent-manager-tool/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_2=g_navNode_3_0.addNode('59174','UM Content Contribution',ssUrlPrefix + 'training/um-content/umcontent-contribution/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_3=g_navNode_3_0.addNode('58272','Images in UM Content',ssUrlPrefix + 'training/um-content/images-in-umcontent/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_3_0=g_navNode_3_0_3.addNode('61561','Image Properties',ssUrlPrefix + 'training/um-content/images-in-umcontent/image-properties/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_4=g_navNode_3_0.addNode('60899','Documents in UM Content',ssUrlPrefix + 'training/um-content/documents-in-umcontent/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_5=g_navNode_3_0.addNode('59176','Creating links',ssUrlPrefix + 'training/um-content/creating-links/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_6=g_navNode_3_0.addNode('61470','Website Meta Data',ssUrlPrefix + 'training/um-content/meta-data/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_7=g_navNode_3_0.addNode('61553','Bios',ssUrlPrefix + 'training/um-content/Bios/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_8=g_navNode_3_0.addNode('59191','Header',ssUrlPrefix + 'training/um-content/header/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_9=g_navNode_3_0.addNode('59192','Footer',ssUrlPrefix + 'training/um-content/footer/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_10=g_navNode_3_0.addNode('59194','Call to Action',ssUrlPrefix + 'training/um-content/call-to-action/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_0_11=g_navNode_3_0.addNode('60860','Creating Tables',ssUrlPrefix + 'training/um-content/creating-tables/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_1=g_navNode_3.addNode('58273','Writing for the web',ssUrlPrefix + 'training/writing-for-the-web/index.htm','secondaryUrlVariableField==region1');
g_navNode_3_4=g_navNode_3.addNode('60219','University Events Calendar ',ssUrlPrefix + 'training/university-events-calendar/index.htm','contributorOnly==false','secondaryUrlVariableField==region1');
g_navNode_3_5=g_navNode_3.addNode('60213','Lyris and Email ',ssUrlPrefix + 'training/lyris-and-email/index.htm','contributorOnly==false','secondaryUrlVariableField==region1');
g_navNode_4=g_navNode_Root.addNode('63116','News',ssUrlPrefix + 'news/index.htm','contributorOnly==false','secondaryUrlVariableField==region1');
g_navNode_5=g_navNode_Root.addNode('48219','Contact',ssUrlPrefix + 'contact/index.htm','secondaryUrlVariableField==region1');
g_navNode_5_0=g_navNode_5.addNode('58405','Schedule a consultation',ssUrlPrefix + 'contact/schedule-a-consultation/index.htm','secondaryUrlVariableField==region1');
g_navNode_5_1=g_navNode_5.addNode('62655','Schedule UMContent Training',ssUrlPrefix + 'contact/ScheduleUMContentTraining/index.htm','secondaryUrlVariableField==region1');
